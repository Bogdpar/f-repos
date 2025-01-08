export interface IComment {
  data: {
    body: string;
    email: string;
    id: number;
    name: string;
    postId: number;
  };
}
export interface IComments {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}
export interface IAxiosQuery {
  description: string;
  id: string;
  img: string;
  name: string;
}
