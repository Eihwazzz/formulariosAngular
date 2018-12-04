import { AlumnoModuleModule } from './alumno-module.module';

describe('AlumnoModuleModule', () => {
  let alumnoModuleModule: AlumnoModuleModule;

  beforeEach(() => {
    alumnoModuleModule = new AlumnoModuleModule();
  });

  it('should create an instance', () => {
    expect(alumnoModuleModule).toBeTruthy();
  });
});
