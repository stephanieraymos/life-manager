// server communication service file
export async function addProject(projectData) {
    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add project');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('Error adding project. Please try again.');
    }
  }
  