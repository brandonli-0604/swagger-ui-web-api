// SwaggerUI configuration for System 7000 REST API
window.onload = function() {
  const ui = SwaggerUIBundle({
    url: './api-spec.yaml',
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout",
    validatorUrl: null, // Disable online validator
    tryItOutEnabled: true,
    supportedSubmitMethods: ['get', 'post', 'put', 'delete', 'patch'],
    onComplete: function(swaggerApi, swaggerUi) {
      console.log("Loaded SwaggerUI for System 7000 REST API");
    },
    onFailure: function(data) {
      console.log("Unable to Load SwaggerUI");
      console.error(data);
    },
    docExpansion: "list",
    jsonEditor: false,
    defaultModelRendering: 'schema',
    showRequestHeaders: false,
    showOperationIds: false
  });

  window.ui = ui;
};