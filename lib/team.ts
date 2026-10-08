export type Teams = {
  id: string;
  name: string;
  championCount: number;
};

const teams: Teams[] = [
  { id: "1", name: "SSG 랜더스", championCount: 5 },
  { id: "2", name: "두산 베어스", championCount: 6 },
  { id: "3", name: "삼성 라이온즈", championCount: 8 },
  { id: "4", name: "KT 위즈", championCount: 1 },
  { id: "5", name: "키움 히어로즈", championCount: 0 },
  { id: "6", name: "한화 이글스", championCount: 1 },
  { id: "7", name: "기아 타이거즈", championCount: 0 },
  { id: "8", name: "LG 트윈스", championCount: 4 },
  { id: "9", name: "롯데 자이언츠", championCount: 2 },
  { id: "10", name: "NC 다이노스", championCount: 1 },
];

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getTeams(): Promise<Teams[]> {
  await delay(600);
  return teams;
}

export async function getTeam(id: string): Promise<Teams | undefined> {
  await delay(600);
  return teams.find((team) => team.id === id);
}
