process.env.RSS_name1 = 'value1';
process.env.RSS_name2 = 'value2';

const parseEnv = () => {
    // Write your code here 
    let result = '';
    for (const key in process.env) {
        if (key.startsWith('RSS_')) {
            result += `${key}=${process.env[key]}; `;
        }
    }
    console.log(result.trim());
};

parseEnv();