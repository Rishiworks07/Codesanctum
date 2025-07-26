const Project = require("../models/Project"); // Make sure this is your updated schema

const editProject = async (req, res) => {
  try {
    const { projectId, newCode, newVersion } = req.body;

    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    // Push current code and version to history before updating
    project.codeHistory.push({
      code: project.code,
      version: project.version,
      updatedAt: new Date()
    });

    // Update project with new code and version
    project.code = newCode;
    project.version = newVersion;

    await project.save();

    res.status(200).json({ message: "Project updated successfully", project });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error while editing project" });
  }
};

module.exports = {
  editProject,
  // other exports...
};
