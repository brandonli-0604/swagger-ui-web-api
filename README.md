# System 7000 REST API Documentation

This project provides a SwaggerUI interface for the System 7000 REST API documentation. The setup includes a template OpenAPI specification that needs to be customized with the actual API details from your PDF specification.

## 🚀 Quick Start

### 1. Install Dependencies

```powershell
npm install
```

### 2. Start the Documentation Server

```powershell
npm start
```

This will start a local web server on `http://localhost:8080` and automatically open the SwaggerUI interface in your browser.

## 📋 Current Setup

The project includes:

- **`index.html`** - Main HTML page hosting SwaggerUI
- **`main.js`** - SwaggerUI configuration
- **`api-spec.yaml`** - OpenAPI specification file (template)
- **`package.json`** - Project dependencies and scripts

## 🔧 Customizing the API Specification

The current `api-spec.yaml` contains example endpoints and needs to be updated with the actual API details from the **"System 7000 REST API Spec.1.29.pdf"** file.

### Step-by-Step Customization Process:

1. **Open the PDF file** and review the API specification
2. **Edit `api-spec.yaml`** and replace the template content with actual API details:

#### Key sections to update:

#### A. Server Information
```yaml
servers:
  - url: https://your-actual-api-domain.com/v1
    description: Production server
```

#### B. API Endpoints
Replace the example `/users` endpoints with actual endpoints from the PDF:

```yaml
paths:
  /your-actual-endpoint:
    get:
      summary: Actual endpoint description from PDF
      # ... rest of the endpoint definition
```

#### C. Data Models
Update the `components/schemas` section with actual data models:

```yaml
components:
  schemas:
    YourActualModel:
      type: object
      properties:
        # ... actual properties from PDF
```

#### D. Authentication
Update authentication details based on PDF specifications:

```yaml
components:
  securitySchemes:
    # Update with actual auth method from PDF
```

### Common API Information to Extract from PDF:

- **Base URL(s)** for the API servers
- **Authentication method** (API key, Bearer token, OAuth, etc.)
- **Available endpoints** (GET, POST, PUT, DELETE operations)
- **Request/response data models** (JSON schemas)
- **HTTP status codes** and error responses
- **Required vs optional parameters**
- **Request headers** and query parameters

## 📖 OpenAPI Specification Format

The `api-spec.yaml` file follows the OpenAPI 3.0.3 specification. Key components:

### Basic Structure:
```yaml
openapi: 3.0.3
info:
  title: Your API Title
  version: 1.29.0
servers:
  - url: https://api.example.com
paths:
  /endpoint:
    get:
      # endpoint definition
components:
  schemas:
    # data models
```

### Adding New Endpoints:
```yaml
paths:
  /new-endpoint:
    get:
      summary: Brief description
      description: Detailed description
      parameters:
        - name: param1
          in: query
          required: true
          schema:
            type: string
      responses:
        '200':
          description: Success response
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/YourModel'
```

## 🛠️ Development

### Development Server (with auto-reload)
```powershell
npm run dev
```

### Project Structure
```
WebAPI/
├── index.html              # SwaggerUI host page
├── main.js                 # SwaggerUI configuration
├── api-spec.yaml          # OpenAPI specification (CUSTOMIZE THIS)
├── package.json           # Dependencies and scripts
├── README.md              # This file
└── System 7000 REST API Spec.1.29.pdf  # Source PDF
```

## 📚 Resources

- [OpenAPI 3.0.3 Specification](https://swagger.io/specification/)
- [SwaggerUI Documentation](https://swagger.io/tools/swagger-ui/)
- [OpenAPI Examples](https://github.com/OAI/OpenAPI-Specification/tree/master/examples)

## 🔍 Tips for PDF Extraction

When reviewing the PDF to extract API information:

1. **Look for endpoint URLs** (usually in format `/api/v1/something`)
2. **Identify HTTP methods** (GET, POST, PUT, DELETE)
3. **Find request/response examples** (usually JSON format)
4. **Note authentication requirements** (headers, tokens, etc.)
5. **Extract error codes** and their meanings
6. **Check for rate limiting** or other API constraints

## ⚡ Next Steps

1. **Review** the PDF specification thoroughly
2. **Update** `api-spec.yaml` with actual API details
3. **Test** the documentation by running `npm start`
4. **Validate** that all endpoints and models are correctly documented
5. **Share** the documentation URL with your team

## 🐛 Troubleshooting

- **Server won't start**: Ensure Node.js is installed and run `npm install`
- **Specification errors**: Check YAML syntax and OpenAPI format
- **Missing endpoints**: Verify the `api-spec.yaml` file is properly updated
- **CORS issues**: Use the provided http-server (included in scripts)

---

**Important**: Remember to replace all example content in `api-spec.yaml` with the actual API specification from your PDF file! 