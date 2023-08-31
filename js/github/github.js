import {Octokit} from "octokit";


/*
const octokit = new Octokit({
   // auth: '
})
*/



const PRIVATE = Symbol();

export class GithubAPI {

    #octokit;

    static #instance = null;

    constructor(token) {
        if (token !== PRIVATE) {
            throw new Error('Cannot instantiate directly!');
        }

        this.#octokit = new Octokit({});
    }

    static getInstance() {
        if(!this.#instance)
            this.#instance = new GithubAPI(PRIVATE);
        return this.#instance;
    }

    /**
     * 깃허브 사용자의 정보를 가져옵니다.
     * @param username
     * @returns {OctokitResponse<any>}
     */
    async getUser(username) {
        try {
            const user = await this.#octokit.request('GET /users/'+username, {
            }).then(res => res.data);

            console.log(user);

            const repos = await this.#octokit.request("GET "+ user.repos_url, {
            }).then(res => res.data)

            console.log(repos);

            const filteredRepos = repos
                .sort((a,b) => new Date(b.created_at) - new Date(a.created_at))
                .slice(0,5);

            return {
                user: user,
                latestRepos: filteredRepos
            }

        } catch (error) {
            return error;
        }
    }
}
