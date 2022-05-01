(() => {
    const Utils = {
        methods: {
            fibonacci: (number) => {
                var f= [];
                f[0] = 0;
                f[1] = 1;
                
                for(var i = 2; i< number;i++){
                    f[i] = f[i-1] + f[i-2];
                }
                return fibonacci;
            },
        }

    }
    document.Utils = Utils;
})();