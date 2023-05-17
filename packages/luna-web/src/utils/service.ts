import { Cloud, Issue, QueryParams, IssueLabel, Hot } from '../type';
import config from '../config';

const GITHUB_API = 'https://api.github.com/repos';
const CLOUD_API =
  'https://v0.yiketianqi.com/free/day?unescape=1&version=v61&appid=53266342&appsecret=mB1eOBjO';

const { username, repository, token } = config.github;
const blog = `${GITHUB_API}/${username}/${repository}`;
const access_token = `token ${token.join('')}`;
// const isDev = process.env.NODE_ENV === 'development'

const githubQuery = async <T>(api: string): Promise<T> => {
  try {
    const response = await fetch(api, {
      method: 'GET',
      headers: { Authorization: access_token },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const error = new Error(response.statusText);
      return Promise.reject(error);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export const queryIssues = async ({
  page = 1,
  pageSize = 10,
  state = 'open',
  filter = '',
}: QueryParams): Promise<Issue[]> => {
  const api = `${blog}/issues?state=${state}&page=${page}&per_page=${pageSize}${filter}`;
  return githubQuery(api);
};

export const queryIssue = async (number: string): Promise<Issue> => {
  const api = `${blog}/issues/${number}?state=open`;
  return githubQuery(api);
};

export const queryIssueByLabel = async (
  // label: IssueLabel
  label: string
): Promise<Issue[]> => {
  const api = `${blog}/issues?state=open&labels=${label}`;
  return githubQuery(api);
};

export const queryArchive = async (page: number = 1): Promise<Issue[]> =>
  queryIssues({ page, state: 'open' });

export const queryInspiration = async (page: number = 1): Promise<Issue[]> =>
  queryIssues({ page, state: 'closed', filter: '&labels=inspiration' });

export const queryCloud = async (): Promise<Cloud> => {
  try {
    const response = await fetch(CLOUD_API);
    if (response.ok) {
      const data: Cloud = await response.json();
      return data;
    } else {
      const error = new Error(response.statusText);
      return Promise.reject(error);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
