import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Editor2 from '@monaco-editor/react';
import { useParams } from 'react-router-dom';
import { api_base_url } from '../helper';
import { toast } from 'react-toastify';

const Editor = () => {
  const [code, setCode] = useState('');
  const { id } = useParams();
  const [output, setOutput] = useState('');
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const [inputPrompts, setInputPrompts] = useState([]);
  const [inputValues, setInputValues] = useState({});

  useEffect(() => {
    fetch(`${api_base_url}/getProject`, {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: localStorage.getItem('token'),
        projectId: id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCode(data.project.code);
          setData(data.project);
        } else {
          toast.error(data.msg);
        }
      })
      .catch((err) => {
        console.error('Error fetching project:', err);
        toast.error('Failed to load project.');
      });
  }, [id]);

  const saveProject = () => {
    const trimmedCode = code?.toString().trim();

    fetch(`${api_base_url}/saveProject`, {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: localStorage.getItem('token'),
        projectId: id,
        code: trimmedCode,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.msg);
        } else {
          toast.error(data.msg);
        }
      })
      .catch((err) => {
        console.error('Error saving project:', err);
        toast.error('Failed to save the project.');
      });
  };

  const handleSaveShortcut = (e) => {
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
      saveProject();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleSaveShortcut);
    return () => {
      window.removeEventListener('keydown', handleSaveShortcut);
    };
  }, [code]);

  const extractInputPrompts = () => {
    const inputRegex = /input\(([^)]*)\)/g;
    const matches = [...code.matchAll(inputRegex)];
    const prompts = matches.map((match, idx) => ({
      id: idx,
      prompt: match[1]?.replace(/['"]+/g, '') || `Input ${idx + 1}`,
    }));
    setInputPrompts(prompts);
  };

  const handleInputChange = (id, value) => {
    setInputValues({ ...inputValues, [id]: value });
  };

  const replaceInputsInCode = () => {
    let modifiedCode = code;
    const inputRegex = /input\(([^)]*)\)/g;
    let i = 0;
    modifiedCode = modifiedCode.replace(inputRegex, () => {
      const value = inputValues[i] || '';
      i++;
      return `"${value}"`;
    });
    return modifiedCode;
  };

  const runProject = () => {
    const prompts = [...code.matchAll(/input\(([^)]*)\)/g)];
    if (prompts.length > 0 && inputPrompts.length === 0) {
      extractInputPrompts();
      toast.info('Please provide input values and click Run again.');
      return;
    }

    const finalCode = replaceInputsInCode();

    fetch('https://emkc.org/api/v2/piston/execute', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        language: data.projLanguage,
        version: data.version,
        files: [
          {
            filename:
              data.name +
              (data.projLanguage === 'python'
                ? '.py'
                : data.projLanguage === 'java'
                ? '.java'
                : data.projLanguage === 'javascript'
                ? '.js'
                : data.projLanguage === 'c'
                ? '.c'
                : data.projLanguage === 'cpp'
                ? '.cpp'
                : data.projLanguage === 'bash'
                ? '.sh'
                : ''),
            content: finalCode,
          },
        ],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setOutput(data.run.output);
        setError(data.run.code === 1);
        setInputPrompts([]);
        setInputValues({});
      });
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row h-[calc(100vh-90px)] bg-gradient-to-br from-[#111827] to-[#1f2937] text-white">
        {/* Left - Code Editor */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full border-r border-gray-700">
          <Editor2
            onChange={(newCode) => setCode(newCode || '')}
            theme="vs-dark"
            height="100%"
            width="100%"
            language={data?.projLanguage || 'python'}
            value={code}
          />
        </div>

        {/* Right - Output Panel */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full overflow-auto backdrop-blur-lg bg-white/5 border-l border-gray-700 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">Output</h2>
            <div className="space-x-2">
              <button
                className="bg-green-500 hover:bg-green-600 px-4 py-1.5 rounded-xl shadow-sm transition-all"
                onClick={saveProject}
              >
                Save
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-600 px-4 py-1.5 rounded-xl shadow-sm transition-all"
                onClick={runProject}
              >
                Run
              </button>
            </div>
          </div>

          {/* Input Prompts */}
          {inputPrompts.length > 0 && (
            <div className="mb-4 space-y-3 bg-white/10 p-4 rounded-xl backdrop-blur-md">
              <p className="font-medium text-yellow-400">Provide Inputs:</p>
              {inputPrompts.map((prompt) => (
                <div key={prompt.id}>
                  <label className="block text-sm mb-1">{prompt.prompt}</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onChange={(e) => handleInputChange(prompt.id, e.target.value)}
                  />
                </div>
              ))}
              <p className="text-sm text-gray-400">Click "Run" again after entering inputs</p>
            </div>
          )}

          {/* Output Box */}
          <pre
            className={`w-full p-4 rounded-xl bg-black/60 backdrop-blur-md border border-gray-600 overflow-auto h-[50vh] text-sm ${
              error ? 'text-red-400' : 'text-green-400'
            }`}
          >
            {output}
          </pre>
        </div>
      </div>
    </>
  );
};

export default Editor;
