// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';

const authentication = async (req: NextApiRequest, res: NextApiResponse) => {
    const jiraAuth = await fetch(
        'https://jira.classyllama.com/rest/api/2/myself',
        {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${getItem('jiraToken')}`,
            },
            redirect: 'follow',
        },
    );
    res.status(jiraAuth.status);
};

export default authentication;
