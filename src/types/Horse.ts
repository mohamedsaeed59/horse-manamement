export interface Horse {
  id: number;
  name: string;
  date_of_birth: string;
  breed: string;
  image: string;
  data: any;
}
  
  export interface HorseApiResponse {
    data: {
      data: Horse[];
    };
  }