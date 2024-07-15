interface SignUpPayload {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
}

export async function signUp(payload: SignUpPayload) {
  const obj: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
  obj.body = JSON.stringify({ ...payload });
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/signUn`;

  const res = await fetch(url, obj);
  const body = await res.json();

  if (!res.ok) throw new Error(`${body.message}`);
  return body;
}

interface LoginPayload {
  email: string;
  password: string;
}

export async function login(payload: LoginPayload) {
  const obj: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
  obj.body = JSON.stringify({ ...payload });
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/signIn`;

  const res = await fetch(url, obj);
  const body = await res.json();

  if (!res.ok) throw new Error(`${body.message}`);
  return body;
}
