
//String -> sql.NVarChar -default
//Number -> sql.Int
//Boolean -> sql.Bit
//Date -> sql.DateTime
//Buffer -> sql.VarBinary
//sql.Table -> sql.TVP

class Account {
    constructor(dir, name, type, value) {
        this.dir = dir;
        this.name = name;
        this.type = type;
        this.value = value;
    }
}

export default { Account };