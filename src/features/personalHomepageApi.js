import axios from "axios";

const githubApiBaseUrl = "https://api.github.com";

export const getRepositories = username => 
    axios.get(`${githubApiBaseUrl}/users/${username}/repos`)
        .then(response => response.data);