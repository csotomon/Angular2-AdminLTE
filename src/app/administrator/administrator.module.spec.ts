import { AdministratorModule } from './administrator.module';

describe('AdministratorModule', () => {
  let administratorModule: AdministratorModule;

  beforeEach(() => {
    administratorModule = new AdministratorModule();
  });

  it('should create an instance', () => {
    expect(administratorModule).toBeTruthy();
  });
});
