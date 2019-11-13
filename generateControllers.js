class Generate {
    constructor(db,tableName) {   
        this.db = db(tableName);
        this.find = this.find.bind(this);
        this.findById = this.findById.bind(this);
        this.add = this.add.bind(this);
    }

    find(query) {
        if(!query) return this.db;

        return this.db
        .where(query);
    }

    findById(id) {
        return this.db
        .where({id})
    }

    add(body){
        return this.db.insert(body);
    }

    remove(id) {
        return this.db.where({id}).del();
    }

    update(changes,id) {
        return this.db.update(changes).where({id})
    }


}

module.exports = Generate;