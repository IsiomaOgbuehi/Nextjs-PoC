const faunadb = require('faunadb');

const secret = process.env.FAUNADB_SECRET_KEY;
const q = faunadb.query;
const client = new faunadb.Client({ secret });

export const getProducts = async (req, res) => {
    try{
        const dbs = await client.query(
            q.Map(
                q.Paginate(
                    q.Match(
                        q.Index('allProducts')
                    )
                ), (ref) => q.Get(ref)
            )
        );
        return JSON.parse(JSON.stringify(dbs.data));
        return {data: dbs.data}
    }catch (err) {
        console.error(err.message);
    }
}