
    export type RemoteKeys = 'remote_two/button' | 'remote_two/reducer' | 'remote_two/state';
    type PackageType<T> = T extends 'remote_two/state' ? typeof import('remote_two/state') :T extends 'remote_two/reducer' ? typeof import('remote_two/reducer') :T extends 'remote_two/button' ? typeof import('remote_two/button') :any;