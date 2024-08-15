
    export type RemoteKeys = 'remote_two/reducer' | 'remote_two/SharedComponent';
    type PackageType<T> = T extends 'remote_two/SharedComponent' ? typeof import('remote_two/SharedComponent') :T extends 'remote_two/reducer' ? typeof import('remote_two/reducer') :any;