import { Descriptor } from 'pip-services3-commons-nodex';
import { Factory } from 'pip-services3-components-nodex';

import { SettingsNullClientV1 } from '../version1/SettingsNullClientV1';
import { SettingsDirectClientV1 } from '../version1/SettingsDirectClientV1';
import { SettingsCommandableHttpClientV1 } from '../version1/SettingsCommandableHttpClientV1';
import { SettingsCommandableLambdaClientV1 } from '../version1/SettingsCommandableLambdaClientV1';
import { SettingsCommandableGrpcClientV1 } from '../version1/SettingsCommandableGrpcClientV1';
import { SettingsGrpcClientV1 } from '../version1/SettingsGrpcClientV1';

export class SettingsClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('service-settings', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('service-settings', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('service-settings', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('service-settings', 'client', 'commandable-http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('service-settings', 'client', 'commandable-lambda', 'default', '1.0');
	public static CommandableGrpcClientV1Descriptor = new Descriptor('service-settings', 'client', 'commandable-grpc', 'default', '1.0');
	public static GrpcClientV1Descriptor = new Descriptor('service-settings', 'client', 'grpc', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(SettingsClientFactory.NullClientV1Descriptor, SettingsNullClientV1);
		this.registerAsType(SettingsClientFactory.DirectClientV1Descriptor, SettingsDirectClientV1);
		this.registerAsType(SettingsClientFactory.HttpClientV1Descriptor, SettingsCommandableHttpClientV1);
		this.registerAsType(SettingsClientFactory.LambdaClientV1Descriptor, SettingsCommandableLambdaClientV1);
		this.registerAsType(SettingsClientFactory.CommandableGrpcClientV1Descriptor, SettingsCommandableGrpcClientV1);
		this.registerAsType(SettingsClientFactory.GrpcClientV1Descriptor, SettingsGrpcClientV1);
	}
}
