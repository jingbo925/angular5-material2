import { TaskAngular5Material5Page } from './app.po';

describe('task-angular5-material5 App', () => {
  let page: TaskAngular5Material5Page;

  beforeEach(() => {
    page = new TaskAngular5Material5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
