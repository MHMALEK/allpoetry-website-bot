import HttpClient from "../../utils/http-client";

const HttpClientService = new HttpClient(
  process.env.ALLPOETRY_BASE_URL as string
);

export default HttpClientService;
