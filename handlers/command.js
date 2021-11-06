const { readdirSync } = require("fs");

const ascii = require("ascii-table");

//Bom, isso tu pegou do arquivo lá do Alpha então não sabe como funciona. Pode ter erros na minha explicação.
let table = new ascii("Iniciando...");
table.setHeading("Comandos", "Status do carregamento.");

module.exports = (client) => {

    //Aqui ele decide a pasta
    readdirSync("./commands/").forEach(dir => {
       //Aqui a ascii-table pega todos os arquivos que possui .js no final, ou seja, comandos.
        const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith(".js"));
    
       
        for (let file of commands) {
            let pull = require(`../commands/${dir}/${file}`);
    
            if (pull.name) {
                client.commands.set(pull.name, pull);
                //Caso o comando esteja funcionando no padrão javascript ele vai usar isso para indicar. Mas não se confunda, isso não é algo que comprova que o comando funciona.
                table.addRow(file, '✅');
            } else {
                table.addRow(file, `❌`);
                continue;
            }
    
           
            if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
        }
    });

    console.log(table.toString());
}