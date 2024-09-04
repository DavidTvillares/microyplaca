// Datos extendidos de procesadores y placas base
const processors = [
    // Series Intel i3
    { id: 'intel_i3_7100', name: 'Intel Core i3-7100', type: 'i3', manufacturer: 'intel', compatibleWith: ['asus_b250', 'gigabyte_b250', 'msi_b250', 'asus_b360', 'gigabyte_b360'] },
    { id: 'intel_i3_7300', name: 'Intel Core i3-7300', type: 'i3', manufacturer: 'intel', compatibleWith: ['asus_b250', 'gigabyte_b250', 'msi_b250', 'asus_b360', 'gigabyte_b360'] },
    { id: 'intel_i3_8100', name: 'Intel Core i3-8100', type: 'i3', manufacturer: 'intel', compatibleWith: ['asus_z370', 'gigabyte_b360', 'asus_h310', 'msi_b360', 'asus_b360', 'gigabyte_b360'] },
    { id: 'intel_i3_8300', name: 'Intel Core i3-8300', type: 'i3', manufacturer: 'intel', compatibleWith: ['asus_z370', 'gigabyte_b360', 'asus_h310', 'msi_b360'] },
    { id: 'intel_i3_9100', name: 'Intel Core i3-9100', type: 'i3', manufacturer: 'intel', compatibleWith: ['gigabyte_b365', 'asus_b365', 'msi_b365', 'asus_h410', 'gigabyte_h410'] },
    { id: 'intel_i3_9300', name: 'Intel Core i3-9300', type: 'i3', manufacturer: 'intel', compatibleWith: ['gigabyte_b365', 'asus_b365', 'msi_b365', 'asus_h410', 'gigabyte_h410'] },
    { id: 'intel_i3_10100', name: 'Intel Core i3-10100', type: 'i3', manufacturer: 'intel', compatibleWith: ['asus_h410', 'gigabyte_h410', 'msi_h410', 'asus_b560', 'gigabyte_b560', 'asus_b460', 'gigabyte_b460', 'msi_b460'] },
    { id: 'intel_i3_10300', name: 'Intel Core i3-10300', type: 'i3', manufacturer: 'intel', compatibleWith: ['asus_h470', 'gigabyte_h470', 'msi_h470', 'asus_b560', 'gigabyte_b560'] },
    { id: 'intel_i3_12100', name: 'Intel Core i3-12100', type: 'i3', manufacturer: 'intel', compatibleWith: ['asus_z690', 'gigabyte_z690', 'msi_z690', 'asus_b660', 'gigabyte_b660', 'msi_b660'] },
    { id: 'intel_i3_13100', name: 'Intel Core i3-13100', type: 'i3', manufacturer: 'intel', compatibleWith: ['asus_z790', 'gigabyte_z790', 'msi_z790', 'asus_b760', 'gigabyte_b760'] },

    // Series Intel i5
    { id: 'intel_i5_7400', name: 'Intel Core i5-7400', type: 'i5', manufacturer: 'intel', compatibleWith: ['asus_b250', 'gigabyte_b250', 'msi_b250', 'asus_b360', 'gigabyte_b360'] },
    { id: 'intel_i5_7500', name: 'Intel Core i5-7500', type: 'i5', manufacturer: 'intel', compatibleWith: ['asus_b250', 'gigabyte_b250', 'msi_b250', 'asus_b360', 'gigabyte_b360'] },
    { id: 'intel_i5_8400', name: 'Intel Core i5-8400', type: 'i5', manufacturer: 'intel', compatibleWith: ['asus_z370', 'gigabyte_b360', 'asus_h370', 'msi_b360'] },
    { id: 'intel_i5_8600k', name: 'Intel Core i5-8600K', type: 'i5', manufacturer: 'intel', compatibleWith: ['asus_z370', 'gigabyte_b360', 'asus_h370', 'msi_b360'] },
    { id: 'intel_i5_9400', name: 'Intel Core i5-9400', type: 'i5', manufacturer: 'intel', compatibleWith: ['asus_b365', 'gigabyte_b365', 'msi_b365'] },
    { id: 'intel_i5_9400f', name: 'Intel Core i5-9400F', type: 'i5', manufacturer: 'intel', compatibleWith: ['gigabyte_b365', 'asus_b365', 'msi_b365', 'asus_h410', 'gigabyte_h410'] },
    { id: 'intel_i5_9600k', name: 'Intel Core i5-9600K', type: 'i5', manufacturer: 'intel', compatibleWith: ['gigabyte_b365', 'asus_b365', 'msi_b365', 'asus_h410', 'gigabyte_h410'] },
    { id: 'intel_i5_10400', name: 'Intel Core i5-10400', type: 'i5', manufacturer: 'intel', compatibleWith: ['asus_b460', 'gigabyte_b460', 'msi_b460'] },
    { id: 'intel_i5_10600k', name: 'Intel Core i5-10600K', type: 'i5', manufacturer: 'intel', compatibleWith: ['gigabyte_z490', 'asus_z490', 'msi_z490', 'asus_b560', 'gigabyte_b560'] },
    { id: 'intel_i5_11600k', name: 'Intel Core i5-11600K', type: 'i5', manufacturer: 'intel', compatibleWith: ['asus_z590', 'gigabyte_z590', 'msi_z590', 'asus_b560', 'gigabyte_b560'] },
    { id: 'intel_i5_12400', name: 'Intel Core i5-12400', type: 'i5', manufacturer: 'intel', compatibleWith: ['asus_b660', 'gigabyte_b660', 'msi_b660'] },
    { id: 'intel_i5_12600k', name: 'Intel Core i5-12600K', type: 'i5', manufacturer: 'intel', compatibleWith: ['asus_z690', 'gigabyte_z690', 'msi_z690', 'asus_b660', 'gigabyte_b660'] },
    { id: 'intel_i5_13600k', name: 'Intel Core i5-13600K', type: 'i5', manufacturer: 'intel', compatibleWith: ['asus_z790', 'gigabyte_z790', 'msi_z790', 'asus_b760', 'gigabyte_b760'] },
    

    // Series Intel i7
    { id: 'intel_i7_7700', name: 'Intel Core i7-7700', type: 'i7', manufacturer: 'intel', compatibleWith: ['asus_b250', 'gigabyte_b250', 'msi_b250'] },
    { id: 'intel_i7_7700k', name: 'Intel Core i7-7700K', type: 'i7', manufacturer: 'intel', compatibleWith: ['asus_z270', 'gigabyte_z270', 'msi_z270', 'asus_b360', 'gigabyte_b360'] },
    { id: 'intel_i7_7800x', name: 'Intel Core i7-7800X', type: 'i7', manufacturer: 'intel', compatibleWith: ['asus_x299', 'gigabyte_x299', 'msi_x299'] },
    { id: 'intel_i7_8700', name: 'Intel Core i7-8700', type: 'i7', manufacturer: 'intel', compatibleWith: ['asus_b360', 'gigabyte_b360', 'msi_b360'] },
    { id: 'intel_i7_8700k', name: 'Intel Core i7-8700K', type: 'i7', manufacturer: 'intel', compatibleWith: ['asus_z370', 'gigabyte_z370', 'msi_z370', 'asus_b360', 'gigabyte_b360'] },
    { id: 'intel_i7_9700', name: 'Intel Core i7-9700', type: 'i7', manufacturer: 'intel', compatibleWith: ['asus_b365', 'gigabyte_b365', 'msi_b365'] },
    { id: 'intel_i7_9700k', name: 'Intel Core i7-9700K', type: 'i7', manufacturer: 'intel', compatibleWith: ['gigabyte_z390', 'asus_z390', 'msi_z390', 'asus_b365', 'gigabyte_b365'] },
    { id: 'intel_i7_10700', name: 'Intel Core i7-10700', type: 'i7', manufacturer: 'intel', compatibleWith: ['asus_b460', 'gigabyte_b460', 'msi_b460'] },
    { id: 'intel_i7_10700k', name: 'Intel Core i7-10700K', type: 'i7', manufacturer: 'intel', compatibleWith: ['gigabyte_z490', 'asus_z490', 'msi_z490', 'asus_b460', 'gigabyte_b460'] },
    { id: 'intel_i7_11700k', name: 'Intel Core i7-11700K', type: 'i7', manufacturer: 'intel', compatibleWith: ['asus_z590', 'gigabyte_z590', 'msi_z590', 'asus_b560', 'gigabyte_b560'] },
    { id: 'intel_i7_12700', name: 'Intel Core i7-12700', type: 'i7', manufacturer: 'intel', compatibleWith: ['asus_b660', 'gigabyte_b660', 'msi_b660'] },
    { id: 'intel_i7_12700k', name: 'Intel Core i7-12700K', type: 'i7', manufacturer: 'intel', compatibleWith: ['asus_z690', 'gigabyte_z690', 'msi_z690', 'asus_b660', 'gigabyte_b660'] },
    { id: 'intel_i7_13700k', name: 'Intel Core i7-13700K', type: 'i7', manufacturer: 'intel', compatibleWith: ['asus_z790', 'gigabyte_z790', 'msi_z790', 'asus_b760', 'gigabyte_b760'] },


    // Procesadores Intel Core i9
    { id: 'intel_i9_9900', name: 'Intel Core i9-9900', type: 'i9', manufacturer: 'intel', compatibleWith: ['asus_z390', 'gigabyte_z390', 'msi_z390'] },
    { id: 'intel_i9_10900', name: 'Intel Core i9-10900', type: 'i9', manufacturer: 'intel', compatibleWith: ['asus_z490', 'gigabyte_z490', 'msi_z490'] },
    { id: 'intel_i9_11900', name: 'Intel Core i9-11900', type: 'i9', manufacturer: 'intel', compatibleWith: ['asus_z590', 'gigabyte_z590', 'msi_z590'] },
    { id: 'intel_i9_12900', name: 'Intel Core i9-12900', type: 'i9', manufacturer: 'intel', compatibleWith: ['asus_z690', 'gigabyte_z690', 'msi_z690'] },
    { id: 'intel_i9_13900', name: 'Intel Core i9-13900', type: 'i9', manufacturer: 'intel', compatibleWith: ['asus_z790', 'gigabyte_z790', 'msi_z790'] },

    

    // Procesadores Intel KF (sin gráficos integrados)
    { id: 'intel_i7_11700kf', name: 'Intel Core i7-11700KF', compatibleWith: ['asus_z590', 'gigabyte_z590', 'msi_z590', 'asus_b560', 'gigabyte_b560'] },
    { id: 'intel_i5_10600kf', name: 'Intel Core i5-10600KF', compatibleWith: ['gigabyte_z490', 'asus_z490', 'msi_z490', 'asus_b560', 'gigabyte_b560'] },
    { id: 'intel_i3_10100kf', name: 'Intel Core i3-10100KF', compatibleWith: ['asus_h410', 'gigabyte_h410', 'msi_h410', 'asus_b560', 'gigabyte_b560'] },

    // Procesadores Intel H (alto rendimiento para laptops)
    { id: 'intel_i7_11800h', name: 'Intel Core i7-11800H', compatibleWith: ['asus_tuf', 'gigabyte_aero', 'msi_ge'] },
    { id: 'intel_i5_11400h', name: 'Intel Core i5-11400H', compatibleWith: ['asus_tuf', 'gigabyte_aero', 'msi_ge'] },

    // Procesadores Intel U (bajo consumo para laptops)
    { id: 'intel_i7_1165g7', name: 'Intel Core i7-1165G7', compatibleWith: ['asus_zenbook', 'gigabyte_p34', 'msi_p65'] },
    { id: 'intel_i5_1135g7', name: 'Intel Core i5-1135G7', compatibleWith: ['asus_zenbook', 'gigabyte_p34', 'msi_p65'] },

    // Procesadores Intel S (versión especial)
    { id: 'intel_i9_9900ks', name: 'Intel Core i9-9900KS', compatibleWith: ['gigabyte_z390', 'asus_z390', 'msi_z390'] },

    // Series AMD Ryzen 3000
    { id: 'amd_ryzen_5_3600', name: 'AMD Ryzen 5 3600', type: 'ryzen3', manufacturer: 'amd', compatibleWith: ['asus_b450', 'gigabyte_b450', 'msi_b450', 'asus_x570', 'gigabyte_x570', 'msi_x570'] },
    { id: 'amd_ryzen_7_3700x', name: 'AMD Ryzen 7 3700X', type: 'ryzen3', manufacturer: 'amd', compatibleWith: ['asus_b450', 'gigabyte_b450', 'msi_b450', 'asus_x570', 'gigabyte_x570', 'msi_x570'] },
    { id: 'amd_ryzen_9_3900x', name: 'AMD Ryzen 9 3900X', type: 'ryzen3', manufacturer: 'amd', compatibleWith: ['asus_b450', 'gigabyte_b450', 'msi_b450', 'asus_x570', 'gigabyte_x570', 'msi_x570'] },

    // Series AMD Ryzen 4000 (APUs)
    { id: 'amd_ryzen_5_4600g', name: 'AMD Ryzen 5 4600G', type: 'ryzen4', manufacturer: 'amd',  compatibleWith: ['asus_b550', 'gigabyte_b550', 'msi_b550', 'asus_a520', 'gigabyte_a520'] },
    { id: 'amd_ryzen_7_4700g', name: 'AMD Ryzen 7 4700G', type: 'ryzen4', manufacturer: 'amd',  compatibleWith: ['asus_b550', 'gigabyte_b550', 'msi_b550', 'asus_a520', 'gigabyte_a520'] },

    // Series AMD Ryzen 5000
    { id: 'amd_ryzen_5_5600x', name: 'AMD Ryzen 5 5600X', type: 'ryzen5', manufacturer: 'amd', compatibleWith: ['asus_b550', 'gigabyte_b550', 'msi_b550', 'asus_x570', 'gigabyte_x570', 'msi_x570'] },
    { id: 'amd_ryzen_7_5800x', name: 'AMD Ryzen 7 5800X', type: 'ryzen5', manufacturer: 'amd', compatibleWith: ['asus_b550', 'gigabyte_b550', 'msi_b550', 'asus_x570', 'gigabyte_x570', 'msi_x570'] },
    { id: 'amd_ryzen_9_5900x', name: 'AMD Ryzen 9 5900X', type: 'ryzen5', manufacturer: 'amd', compatibleWith: ['asus_b550', 'gigabyte_b550', 'msi_b550', 'asus_x570', 'gigabyte_x570', 'msi_x570'] },
    { id: 'amd_ryzen_9_5950x', name: 'AMD Ryzen 9 5950X', type: 'ryzen5', manufacturer: 'amd', compatibleWith: ['asus_b550', 'gigabyte_b550', 'msi_b550', 'asus_x570', 'gigabyte_x570', 'msi_x570'] },

    // Series AMD Ryzen 7000
    { id: 'amd_ryzen_5_7600x', name: 'AMD Ryzen 5 7600X', type: 'ryzen7', manufacturer: 'amd', compatibleWith: ['asus_b650', 'gigabyte_b650', 'msi_b650', 'asus_x670', 'gigabyte_x670', 'msi_x670'] },
    { id: 'amd_ryzen_7_7700x', name: 'AMD Ryzen 7 7700X', type: 'ryzen7', manufacturer: 'amd', compatibleWith: ['asus_b650', 'gigabyte_b650', 'msi_b650', 'asus_x670', 'gigabyte_x670', 'msi_x670'] },
    { id: 'amd_ryzen_9_7900x', name: 'AMD Ryzen 9 7900X', type: 'ryzen7', manufacturer: 'amd', compatibleWith: ['asus_b650', 'gigabyte_b650', 'msi_b650', 'asus_x670', 'gigabyte_x670', 'msi_x670'] },
    { id: 'amd_ryzen_9_7950x', name: 'AMD Ryzen 9 7950X', type: 'ryzen7', manufacturer: 'amd', compatibleWith: ['asus_b650', 'gigabyte_b650', 'msi_b650', 'asus_x670', 'gigabyte_x670', 'msi_x670'] },

    // Agregar más procesadores según sea necesario
];

const motherboards = [
    // Placas base básicas y económicas
    { id: 'asus_b250', name: 'ASUS B250' },
    { id: 'gigabyte_b250', name: 'Gigabyte B250' },
    { id: 'msi_b250', name: 'MSI B250' },
    { id: 'gigabyte_b365', name: 'Gigabyte B365' },
    { id: 'asus_b365', name: 'ASUS B365' },
    { id: 'msi_b365', name: 'MSI B365' },
    { id: 'asus_h410', name: 'ASUS H410' },
    { id: 'gigabyte_h410', name: 'Gigabyte H410' },
    { id: 'msi_h410', name: 'MSI H410' },
    { id: 'asus_b550', name: 'ASUS B550' },
    { id: 'gigabyte_b550', name: 'Gigabyte B550' },
    { id: 'msi_b550', name: 'MSI B550' },
    { id: 'asus_x570', name: 'ASUS X570' },
    { id: 'gigabyte_x570', name: 'Gigabyte X570' },
    { id: 'msi_x570', name: 'MSI X570' },
    { id: 'asus_z170', name: 'ASUS Z170' },
    { id: 'gigabyte_z270', name: 'Gigabyte Z270' },
    { id: 'asus_z270', name: 'ASUS Z270' },
    { id: 'gigabyte_z370', name: 'Gigabyte Z370' },
    { id: 'asus_z370', name: 'ASUS Z370' },
    { id: 'asus_tuf', name: 'ASUS TUF' }, // Para procesadores H
    { id: 'gigabyte_aero', name: 'Gigabyte Aero' }, // Para procesadores H
    { id: 'msi_ge', name: 'MSI GE' }, // Para procesadores H
    { id: 'asus_zenbook', name: 'ASUS Zenbook' }, // Para procesadores U
    { id: 'gigabyte_p34', name: 'Gigabyte P34' }, // Para procesadores U
    { id: 'msi_p65', name: 'MSI P65' }, // Para procesadores U

        // Placas base Intel
        { id: 'asus_h310', name: 'ASUS H310', manufacturer: 'intel' },
        { id: 'gigabyte_h310', name: 'Gigabyte H310', manufacturer: 'intel' },
        { id: 'msi_h310', name: 'MSI H310', manufacturer: 'intel' },
        { id: 'asus_b360', name: 'ASUS B360', manufacturer: 'intel' },
        { id: 'gigabyte_b360', name: 'Gigabyte B360', manufacturer: 'intel' },
        { id: 'msi_b360', name: 'MSI B360', manufacturer: 'intel' },
        { id: 'asus_b460', name: 'ASUS B460', manufacturer: 'intel' },
        { id: 'gigabyte_b460', name: 'Gigabyte B460', manufacturer: 'intel' },
        { id: 'msi_b460', name: 'MSI B460', manufacturer: 'intel' },
        { id: 'asus_b560', name: 'ASUS B560', manufacturer: 'intel' },
        { id: 'gigabyte_b560', name: 'Gigabyte B560', manufacturer: 'intel' },
        { id: 'msi_b560', name: 'MSI B560', manufacturer: 'intel' },
        { id: 'asus_h370', name: 'ASUS H370', manufacturer: 'intel' },
        { id: 'gigabyte_h370', name: 'Gigabyte H370', manufacturer: 'intel' },
        { id: 'msi_h370', name: 'MSI H370', manufacturer: 'intel' },
        { id: 'asus_h470', name: 'ASUS H470', manufacturer: 'intel' },
        { id: 'gigabyte_h470', name: 'Gigabyte H470', manufacturer: 'intel' },
        { id: 'msi_h470', name: 'MSI H470', manufacturer: 'intel' },
        { id: 'asus_z390', name: 'ASUS Z390', manufacturer: 'intel' },
        { id: 'gigabyte_z390', name: 'Gigabyte Z390', manufacturer: 'intel' },
        { id: 'msi_z390', name: 'MSI Z390', manufacturer: 'intel' },
        { id: 'asus_z490', name: 'ASUS Z490', manufacturer: 'intel' },
        { id: 'gigabyte_z490', name: 'Gigabyte Z490', manufacturer: 'intel' },
        { id: 'msi_z490', name: 'MSI Z490', manufacturer: 'intel' },
        { id: 'asus_z590', name: 'ASUS Z590', manufacturer: 'intel' },
        { id: 'gigabyte_z590', name: 'Gigabyte Z590', manufacturer: 'intel' },
        { id: 'msi_z590', name: 'MSI Z590', manufacturer: 'intel' },
        { id: 'asus_z690', name: 'ASUS Z690', manufacturer: 'intel' },
        { id: 'gigabyte_z690', name: 'Gigabyte Z690', manufacturer: 'intel' },
        { id: 'msi_z690', name: 'MSI Z690', manufacturer: 'intel' },
        { id: 'asus_z790', name: 'ASUS Z790', manufacturer: 'intel' },
        { id: 'gigabyte_z790', name: 'Gigabyte Z790', manufacturer: 'intel' },
        { id: 'msi_z790', name: 'MSI Z790', manufacturer: 'intel' },
        { id: 'asus_h510', name: 'ASUS H510', manufacturer: 'intel' },
        { id: 'gigabyte_h510', name: 'Gigabyte H510', manufacturer: 'intel' },
        { id: 'msi_h510', name: 'MSI H510', manufacturer: 'intel' },
    
        // Placas base AMD
        { id: 'asus_b450', name: 'ASUS B450', manufacturer: 'amd' },
        { id: 'gigabyte_b450', name: 'Gigabyte B450', manufacturer: 'amd' },
        { id: 'msi_b450', name: 'MSI B450', manufacturer: 'amd' },
        { id: 'asus_b550', name: 'ASUS B550', manufacturer: 'amd' },
        { id: 'gigabyte_b550', name: 'Gigabyte B550', manufacturer: 'amd' },
        { id: 'msi_b550', name: 'MSI B550', manufacturer: 'amd' },
        { id: 'asus_a320', name: 'ASUS A320', manufacturer: 'amd' },
        { id: 'gigabyte_a320', name: 'Gigabyte A320', manufacturer: 'amd' },
        { id: 'msi_a320', name: 'MSI A320', manufacturer: 'amd' },
        { id: 'asus_a520', name: 'ASUS A520', manufacturer: 'amd' },
        { id: 'gigabyte_a520', name: 'Gigabyte A520', manufacturer: 'amd' },
        { id: 'msi_a520', name: 'MSI A520', manufacturer: 'amd' },
        { id: 'asus_x370', name: 'ASUS X370', manufacturer: 'amd' },
        { id: 'gigabyte_x370', name: 'Gigabyte X370', manufacturer: 'amd' },
        { id: 'msi_x370', name: 'MSI X370', manufacturer: 'amd' },
        { id: 'asus_x470', name: 'ASUS X470', manufacturer: 'amd' },
        { id: 'gigabyte_x470', name: 'Gigabyte X470', manufacturer: 'amd' },
        { id: 'msi_x470', name: 'MSI X470', manufacturer: 'amd' },
        { id: 'asus_x570', name: 'ASUS X570', manufacturer: 'amd' },
        { id: 'gigabyte_x570', name: 'Gigabyte X570', manufacturer: 'amd' },
        { id: 'msi_x570', name: 'MSI X570', manufacturer: 'amd' },
        { id: 'asus_x670', name: 'ASUS X670', manufacturer: 'amd' },
        { id: 'gigabyte_x670', name: 'Gigabyte X670', manufacturer: 'amd' },
        { id: 'msi_x670', name: 'MSI X670', manufacturer: 'amd' },
        { id: 'asus_b650', name: 'ASUS B650', manufacturer: 'amd' },
        { id: 'gigabyte_b650', name: 'Gigabyte B650', manufacturer: 'amd' },
        { id: 'msi_b650', name: 'MSI B650', manufacturer: 'amd' },
    
    
    
    // Agregar más placas base según sea necesario
];


// Inicializar las opciones de los selectores
function initializeSelectors() {
    const processorSelect = document.getElementById('processorSelect');
    const motherboardSelect = document.getElementById('motherboardSelect');

    // Agregar opciones de procesadores
    processors.forEach(processor => {
        const option = document.createElement('option');
        option.value = processor.id;
        option.textContent = processor.name;
        processorSelect.appendChild(option);
    });

    // Agregar opciones de placas base
    motherboards.forEach(motherboard => {
        const option = document.createElement('option');
        option.value = motherboard.id;
        option.textContent = motherboard.name;
        motherboardSelect.appendChild(option);
    });
}

// Mostrar las placas base compatibles con el procesador seleccionado
function updateCompatibleMotherboards() {
    const processorId = document.getElementById('processorSelect').value;
    const motherboardList = document.getElementById('motherboardList');

    // Limpiar la lista actual de placas base
    motherboardList.innerHTML = '';

    if (!processorId) {
        return;
    }

    const processor = processors.find(p => p.id === processorId);

    if (processor) {
        // Filtrar y mostrar las placas base compatibles
        const compatibleMotherboards = motherboards.filter(motherboard => 
            processor.compatibleWith.includes(motherboard.id)
        );

        compatibleMotherboards.forEach(motherboard => {
            const listItem = document.createElement('li');
            listItem.textContent = motherboard.name;
            motherboardList.appendChild(listItem);
        });
    }
}

// Mostrar los procesadores compatibles con la placa base seleccionada
function updateCompatibleProcessors() {
    const motherboardId = document.getElementById('motherboardSelect').value;
    const processorList = document.getElementById('processorList');

    // Limpiar la lista actual de procesadores
    processorList.innerHTML = '';

    if (!motherboardId) {
        return;
    }

    const compatibleProcessors = processors.filter(processor => 
        processor.compatibleWith.includes(motherboardId)
    );

    compatibleProcessors.forEach(processor => {
        const listItem = document.createElement('li');
        listItem.textContent = processor.name;
        processorList.appendChild(listItem);
    });
}

// Comprobar la compatibilidad entre el procesador y la placa base seleccionados
function checkCompatibility() {
    const processorId = document.getElementById('processorSelect').value;
    const motherboardId = document.getElementById('motherboardSelect').value;
    const resultElement = document.getElementById('result');

    if (!processorId || !motherboardId) {
        resultElement.textContent = 'Por favor, selecciona tanto un procesador como una placa base.';
        return;
    }

    const processor = processors.find(p => p.id === processorId);
    const motherboard = motherboards.find(m => m.id === motherboardId);

    if (processor.compatibleWith.includes(motherboardId)) {
        resultElement.textContent = `¡El procesador ${processor.name} es compatible con la placa base ${motherboard.name}!`;
    } else {
        resultElement.textContent = `El procesador ${processor.name} no es compatible con la placa base ${motherboard.name}.`;
    }
}

// Inicializar los selectores y eventos cuando la página cargue
window.onload = function() {
    initializeSelectors();
    document.getElementById('processorSelect').addEventListener('change', updateCompatibleMotherboards);
    document.getElementById('motherboardSelect').addEventListener('change', updateCompatibleProcessors);

    
};

// Función para mostrar los iconos junto a los nombres en los selectores
function displayOptionsWithIcons(options, selectorId, type) {
    const selectElement = document.getElementById(selectorId);
    selectElement.innerHTML = ''; // Limpiar opciones anteriores

    // Añadir opción predeterminada
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = type === 'processor' ? 'Seleccionar procesador' : 'Seleccionar placa base';
    selectElement.appendChild(defaultOption);

    // Añadir las opciones
    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.id;
        optionElement.textContent = option.name;
        selectElement.appendChild(optionElement);
    });

    // Escuchar el cambio en el select para cambiar el icono
    selectElement.addEventListener('change', function() {
        const selectedOption = options.find(option => option.id === selectElement.value);
        selectElement.classList.remove('icon-intel', 'icon-amd');
        if (selectedOption) {
            selectElement.classList.add(`icon-${selectedOption.manufacturer}`);
        }
    });
}

// Ejemplo de uso
displayOptionsWithIcons(processors, 'processorSelect', 'processor');
displayOptionsWithIcons(motherboards, 'motherboardSelect', 'motherboard');

// Ordenar las placas base por el nombre del fabricante y luego por el nombre del modelo
motherboards.sort((a, b) => {
    if (a.manufacturer < b.manufacturer) return -1;
    if (a.manufacturer > b.manufacturer) return 1;
    return a.name.localeCompare(b.name);
});

function displayOptionsWithIcons(options, selectorId, type) {
    const selectElement = document.getElementById(selectorId);
    selectElement.innerHTML = ''; // Limpiar opciones anteriores

    // Añadir opción predeterminada
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = type === 'processor' ? 'Seleccionar procesador' : 'Seleccionar placa base';
    selectElement.appendChild(defaultOption);

    // Añadir las opciones ordenadas
    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.id;
        optionElement.textContent = option.name;
        selectElement.appendChild(optionElement);
    });

    // Escuchar el cambio en el select para cambiar el icono
    selectElement.addEventListener('change', function() {
        const selectedOption = options.find(option => option.id === selectElement.value);
        selectElement.classList.remove('icon-intel', 'icon-amd');
        if (selectedOption) {
            selectElement.classList.add(`icon-${selectedOption.manufacturer}`);
        }
    });
}

// Ejemplo de uso
displayOptionsWithIcons(processors, 'processorSelect', 'processor');

// Ordenar las placas base antes de mostrarlas
motherboards.sort((a, b) => {
    if (a.manufacturer < b.manufacturer) return -1;
    if (a.manufacturer > b.manufacturer) return 1;
    return a.name.localeCompare(b.name);
});
displayOptionsWithIcons(motherboards, 'motherboardSelect', 'motherboard');

