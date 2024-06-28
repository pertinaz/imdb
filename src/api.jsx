import axiosInstance from "./axiosIstance";

const conseguir = async (type,query = "") => {
    try{
        const response = await axiosInstance.get(`/${type}`,{
            params: { query }
        });
    } catch (error){
        console.error(error);
        return null;
    }
};


export const fetchMovies = async(query = "") =>{
    const type = searchKey ? "search" : "discover"
    const {data : { results },
  } = await axiosInstance.get(`${API_URL}/${type}/movie`, {
    params: {
      api_key: API_KEY,
      query: searchKey,
    },
  });

  setMovies(results);
};

const fetchShows = async(searchKey) => {
    const type = searchKey ? "search" : "discover";
    const {data:{results}} = await axiosInstance.get(`${API_URL}/${type}/tv`, {
        params:{
        api_key: API_KEY,
        query:searchKey,
        }
    });
    setShows(results);
}

const fetchPeople = async(searchKey) => {
    const type = searchKey ? "search" : "discover";
    const{ data: {results}} = await axiosInstance.get(`${API_URL}/${type}/person`, {
        params: {
        api_key: API_KEY,
        query: searchKey,
        },
    });
    setPeople(results);
}
export default conseguir;