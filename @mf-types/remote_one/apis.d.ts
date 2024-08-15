
    export type RemoteKeys = 'remote_one/reducer' | 'remote_one/SharedComponent';
    type PackageType<T> = T extends 'remote_one/SharedComponent' ? typeof import('remote_one/SharedComponent') :T extends 'remote_one/reducer' ? typeof import('remote_one/reducer') :any;