const faunadb = require('faunadb');

const secret = process.env.FAUNADB_SECRET_KEY;
const q = faunadb.query;
const client = new faunadb.Client({ secret });

module.exports = async (req, res) => {
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
        res.status(200).json(dbs.data);
    }catch (err) {
        res.status(500).json({error: err.message})
    }
}