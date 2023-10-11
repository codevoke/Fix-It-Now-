from flask_restx import Api

# from .resource-file import api as resource_api

api = Api(
    title="Fix It Now",
    version="1.0",
    description="simple API",
)

# api.add_namespace(resource_api)