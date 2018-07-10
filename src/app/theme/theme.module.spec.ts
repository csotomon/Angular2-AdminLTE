import { ThemeModule } from './theme.module';

describe('ThemeModule', () => {
  let themeModule: ThemeModule;

  beforeEach(() => {
    themeModule = new ThemeModule();
  });

  it('should create an instance', () => {
    expect(themeModule).toBeTruthy();
  });
});
