export type AuthUser = {
    id: number | null;
    name: string | null;
    email: string | null;
    role: string | null;
}

export type LoginProps = {
    email: string;
    password: string;
};