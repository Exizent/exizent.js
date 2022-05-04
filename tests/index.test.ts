import {ExizentCasesApiClient} from '../src/index';

test("Calling get.cases on API client returns one item with '1' as the id", () => {
  const apiClient = ExizentCasesApiClient();

  const data = apiClient.get.cases;

  expect(data.length).toBe(1);
  expect(data[0].id).toBe('1');
})