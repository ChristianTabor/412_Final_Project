/** source/controllers/controllers.ts */
import {Request, Response, NextFunction} from 'express';
import querries from "../sql/querries";

const test = async (req: Request, res: Response, next: NextFunction) => {
    console.log("test");
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).send("test").end();
};

const createAccount = async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
    const out = await querries.createUser([req.body.fname, req.body.lname, req.body.email, req.body.password]);
    console.log(out)
    console.log(JSON.parse(JSON.stringify(out))['insertId']);
    res.set('Access-Control-Allow-Origin', '*');
    const val = JSON.parse(JSON.stringify(out))['insertId']
    res.status(200).send(out).end();
};

const login = async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.query.email + " " + req.query.password);
    const out = await querries.login([String(req.query.password), String(req.query.email), String(req.query.email), String(req.query.password)]);
    console.log(out)
    res.set('Access-Control-Allow-Origin', '*');
    if (JSON.parse(JSON.stringify(out))[0]['login']) {
        res.status(200).send(out).end();
    } else {
        res.status(401).send("Invalid Login").end();
    }
};

const searchByTitle = async (req: Request, res: Response, next: NextFunction) => {
    console.log("Search criteria: " + req.query.title);
    const out = await querries.searchByTitle([String(req.query.title)]);
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).send(JSON.stringify(out)).end();
};

const searchByActor = async (req: Request, res: Response, next: NextFunction) => {
    console.log("Search criteria: " + req.query.actor);
    const out = await querries.searchByActor([String(req.query.actor)]);
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).send(JSON.stringify(out)).end();
};

const getMoviesByActor = async (req: Request, res: Response, next: NextFunction) => {
    console.log("Search criteria: " + req.query.aid);
    const out = await querries.getMoviesByActor([String(req.query.aid)]);
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).send(JSON.stringify(out)).end();
}

const getMovieInfoById = async (req: Request, res: Response, next: NextFunction) => {
    console.log("Search criteria: " + req.query.mpid);
    const out = await querries.getMovieInfoById([String(req.query.mpid)]);
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).send(JSON.stringify(out)).end();
}

const getActorInfoByMovieId = async (req: Request, res: Response, next: NextFunction) => {
    console.log("Search criteria: " + req.query.mpid);
    const out = await querries.getActorInfoByMovieId([String(req.query.mpid)]);
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).send(JSON.stringify(out)).end();
}

const getWatchList = async (req: Request, res: Response, next: NextFunction) => {
    console.log("Search criteria: " + req.query.uid);
    const out = await querries.getWatchList([String(req.query.uid)]);
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).send(JSON.stringify(out)).end();
};

const addToWatchList = async (req: Request, res: Response, next: NextFunction) => {
    console.log("Search criteria: " + req.body.uid + " " + req.body.mpid);
    const out1 = await querries.ifWatchListExists([req.body.uid]);
    res.set('Access-Control-Allow-Origin', '*');
    if (!JSON.parse(JSON.stringify(out1))[0]['exist']) {
        await querries.createWatchList([req.body.uid]);
    }
    const out2 = await querries.ifExistsInWatchList([req.body.uid, req.body.mpid]);
    console.log(out2)
    if (!JSON.parse(JSON.stringify(out2))[0]['exist']) {
        await querries.addToWatchList([req.body.mpid, req.body.uid]);
        res.status(200).send("Added To Watchlist!").end();
    }else{
        res.status(304).send("Already In Watchlist!").end();
    }

};

const removeFromWatchList = async (req: Request, res: Response, next: NextFunction) => {
    console.log("Search criteria: " + req.body.uid + " " + req.body.mpid);
    await querries.removeFromWatchList([req.body.mpid, req.body.uid]);
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).send("Removed From Watchlist!").end();
};

const addRating = async (req: Request, res: Response, next: NextFunction) => {
    console.log("Search criteria: " + req.body.mpid + " " + req.body.rating);
    await querries.addRating([req.body.mpid], [req.body.rating, req.body.mpid]);
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).send("Rating Updated!").end();
};

const getActorByAid = async (req: Request, res: Response, next: NextFunction) => {
    console.log("Search criteria: " + req.query.aid);
    const out = await querries.getActorByAid([String(req.query.aid)]);
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).send(JSON.stringify(out)).end();
};

const getAllActors = async (req: Request, res: Response, next: NextFunction) => {
    const out = await querries.getAllActors([]);
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).send(JSON.stringify(out)).end();
}

const getAllMovies = async (req: Request, res: Response, next: NextFunction) => {
    const out = await querries.getAllMovies([]);
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).send(JSON.stringify(out)).end();
}

const getUserInfo = async (req: Request, res: Response, next: NextFunction) => {
    const out = await querries.getUserInfo([String(req.query.uid)]);
    console.log(out)
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).send(JSON.stringify(out)).end();
}


export default {
    test,
    createAccount,
    login,
    searchByTitle,
    searchByActor,
    getWatchList,
    addToWatchList,
    removeFromWatchList,
    addRating,
    getMoviesByActor,
    getMovieInfoById,
    getActorInfoByMovieId,
    getActorByAid,
    getAllActors,
    getAllMovies,
    getUserInfo
};