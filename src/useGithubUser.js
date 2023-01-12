import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useGithubUser = (name) => {
const { data, error } = useSWR(name ? `https://api.github.com/users/${name}` : null, fetcher);
        return {
            data: data, 
            isLoading: !data && !error,
         error,
        };
}