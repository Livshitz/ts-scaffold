// Module template

export class Module {
    public constructor(public options?: Partial<ModuleOptions>) {
        this.options = { ...new ModuleOptions(), ...options };
    }
}

export class ModuleOptions {}
