import {open,close,appendFile} from "fs"

const closeArq = (fd) => {
    close(fd,(err)=>{ if (err) throw err; });
}

open('log.txt', 'a', (err,fd) =>{
    if (err) throw err;
    appendFile(fd,`Escrito X em ${new Date()}\n`,'utf8',
       (err) => { closeArq(fd); if (err) throw err; });
});

