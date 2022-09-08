import { get } from 'env-var';
export class ServerConfig {
  public static readonly NX_PORT: number = get('NX_PORT')
    .default(3333)
    .required()
    .asPortNumber();

  public static readonly NX_LOG_ENABLE: boolean = get('API_LOG_ENABLE')
  .required()
  .asBool()

  public static readonly NX_MONGODB_URI: string = get('NX_MONGODB_URI')
    .required()
    .asString();
  public static readonly NX_SESSION_SECRET: string = get('NX_SESSION_SECRET')
    .required()
    .asString();
  public static readonly NX_CLIENT_URL: string = get('NX_CLIENT_URL')
    .required()
    .asString();
}
