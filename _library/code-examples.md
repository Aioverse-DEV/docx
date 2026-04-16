---
title: "Code Examples"
category: examples
---

# Code Examples

Collection of code examples for common use cases.

## Authentication

### JavaScript/Node.js

```javascript
const axios = require('axios');

async function authenticate(username, password) {
  try {
    const response = await axios.post('https://api.aioverse.dev/v1/auth/token', {
      username,
      password
    });
    
    return response.data.token;
  } catch (error) {
    console.error('Authentication failed:', error.message);
    throw error;
  }
}

// Usage
const token = await authenticate('user@example.com', 'password');
```

### Python

```python
import requests

def authenticate(username, password):
    """Authenticate and get access token"""
    url = 'https://api.aioverse.dev/v1/auth/token'
    data = {
        'username': username,
        'password': password
    }
    
    response = requests.post(url, json=data)
    response.raise_for_status()
    
    return response.json()['token']

# Usage
token = authenticate('user@example.com', 'password')
```

## Creating a Project

### JavaScript

```javascript
const createProject = async (token, projectData) => {
  const response = await axios.post(
    'https://api.aioverse.dev/v1/projects',
    projectData,
    {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }
  );
  
  return response.data;
};

// Usage
const project = await createProject(token, {
  name: 'My New Project',
  description: 'A sample project',
  settings: {
    visibility: 'public'
  }
});
```

### Python

```python
def create_project(token, project_data):
    """Create a new project"""
    url = 'https://api.aioverse.dev/v1/projects'
    headers = {
        'Authorization': f'Bearer {token}',
        'Content-Type': 'application/json'
    }
    
    response = requests.post(url, json=project_data, headers=headers)
    response.raise_for_status()
    
    return response.json()

# Usage
project = create_project(token, {
    'name': 'My New Project',
    'description': 'A sample project',
    'settings': {
        'visibility': 'public'
    }
})
```

## File Upload

### JavaScript

```javascript
const uploadFile = async (token, projectId, file) => {
  const formData = new FormData();
  formData.append('file', file);
  
  const response = await axios.post(
    `https://api.aioverse.dev/v1/projects/${projectId}/resources`,
    formData,
    {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    }
  );
  
  return response.data;
};
```

### Python

```python
def upload_file(token, project_id, file_path):
    """Upload a file to a project"""
    url = f'https://api.aioverse.dev/v1/projects/{project_id}/resources'
    headers = {
        'Authorization': f'Bearer {token}'
    }
    
    with open(file_path, 'rb') as f:
        files = {'file': f}
        response = requests.post(url, files=files, headers=headers)
        response.raise_for_status()
    
    return response.json()
```

## Error Handling

### JavaScript

```javascript
const handleApiError = (error) => {
  if (error.response) {
    // Server responded with error
    console.error('Error:', error.response.data.error.message);
    console.error('Status:', error.response.status);
  } else if (error.request) {
    // Request made but no response
    console.error('No response from server');
  } else {
    // Other errors
    console.error('Error:', error.message);
  }
};

try {
  await createProject(token, projectData);
} catch (error) {
  handleApiError(error);
}
```

### Python

```python
try:
    project = create_project(token, project_data)
except requests.exceptions.HTTPError as e:
    print(f'HTTP Error: {e.response.status_code}')
    print(f'Message: {e.response.json()["error"]["message"]}')
except requests.exceptions.ConnectionError:
    print('Connection error: Unable to reach server')
except requests.exceptions.Timeout:
    print('Request timeout')
except Exception as e:
    print(f'Unexpected error: {str(e)}')
```

## Pagination

### JavaScript

```javascript
const getAllProjects = async (token) => {
  const projects = [];
  let page = 1;
  let hasMore = true;
  
  while (hasMore) {
    const response = await axios.get(
      `https://api.aioverse.dev/v1/projects?page=${page}&limit=10`,
      {
        headers: { 'Authorization': `Bearer ${token}` }
      }
    );
    
    projects.push(...response.data.data);
    hasMore = page * 10 < response.data.pagination.total;
    page++;
  }
  
  return projects;
};
```

### Python

```python
def get_all_projects(token):
    """Get all projects with pagination"""
    projects = []
    page = 1
    
    while True:
        url = f'https://api.aioverse.dev/v1/projects?page={page}&limit=10'
        headers = {'Authorization': f'Bearer {token}'}
        
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        
        data = response.json()
        projects.extend(data['data'])
        
        if page * 10 >= data['pagination']['total']:
            break
        
        page += 1
    
    return projects
```

---

For more examples, see the [GitHub repository](https://github.com/Aioverse-DEV/docx/tree/main/examples).
