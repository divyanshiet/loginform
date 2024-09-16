const home = async(req,res) => {
    try{
        res.status(200).send("sent through controlller");
    } catch(error)
    {
        console.log(error);
    }
}
module.exports = {home};
