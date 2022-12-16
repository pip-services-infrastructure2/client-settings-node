"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsClientFactory = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const SettingsNullClientV1_1 = require("../version1/SettingsNullClientV1");
const SettingsDirectClientV1_1 = require("../version1/SettingsDirectClientV1");
const SettingsCommandableHttpClientV1_1 = require("../version1/SettingsCommandableHttpClientV1");
const SettingsCommandableLambdaClientV1_1 = require("../version1/SettingsCommandableLambdaClientV1");
const SettingsCommandableGrpcClientV1_1 = require("../version1/SettingsCommandableGrpcClientV1");
const SettingsGrpcClientV1_1 = require("../version1/SettingsGrpcClientV1");
class SettingsClientFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(SettingsClientFactory.NullClientV1Descriptor, SettingsNullClientV1_1.SettingsNullClientV1);
        this.registerAsType(SettingsClientFactory.DirectClientV1Descriptor, SettingsDirectClientV1_1.SettingsDirectClientV1);
        this.registerAsType(SettingsClientFactory.HttpClientV1Descriptor, SettingsCommandableHttpClientV1_1.SettingsCommandableHttpClientV1);
        this.registerAsType(SettingsClientFactory.LambdaClientV1Descriptor, SettingsCommandableLambdaClientV1_1.SettingsCommandableLambdaClientV1);
        this.registerAsType(SettingsClientFactory.CommandableGrpcClientV1Descriptor, SettingsCommandableGrpcClientV1_1.SettingsCommandableGrpcClientV1);
        this.registerAsType(SettingsClientFactory.GrpcClientV1Descriptor, SettingsGrpcClientV1_1.SettingsGrpcClientV1);
    }
}
exports.SettingsClientFactory = SettingsClientFactory;
SettingsClientFactory.Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-settings', 'factory', 'default', 'default', '1.0');
SettingsClientFactory.NullClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-settings', 'client', 'null', 'default', '1.0');
SettingsClientFactory.DirectClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-settings', 'client', 'direct', 'default', '1.0');
SettingsClientFactory.HttpClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-settings', 'client', 'commandable-http', 'default', '1.0');
SettingsClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-settings', 'client', 'commandable-lambda', 'default', '1.0');
SettingsClientFactory.CommandableGrpcClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-settings', 'client', 'commandable-grpc', 'default', '1.0');
SettingsClientFactory.GrpcClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-settings', 'client', 'grpc', 'default', '1.0');
//# sourceMappingURL=SettingsClientFactory.js.map