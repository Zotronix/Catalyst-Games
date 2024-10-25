async function convertData() {
    // URLs of the split files
    const fileUrls = [
        'https://cdn.jsdelivr.net/gh/Zotronix/Catalyst-Games@new/main/Car%20Simulator/chunk-1.unityweb',
        'https://cdn.jsdelivr.net/gh/Zotronix/Catalyst-Games@new/main/Car%20Simulator/chunk-2.unityweb',
        'https://cdn.jsdelivr.net/gh/Zotronix/Catalyst-Games@new/main/Car%20Simulator/chunk-3.unityweb'
    ];

    try {
        const filePromises = fileUrls.map(url => fetch(url).then(response => response.blob()));
        const fileBlobs = await Promise.all(filePromises);

        // Create a new Blob to hold the merged content
        const mergedBlob = new Blob(fileBlobs, { type: 'application/octet-stream' });
        const dataURL = URL.createObjectURL(mergedBlob);

        // Create a JSON object with the merged data URL and other properties
        const jsonContent = {
            TOTAL_MEMORY: 268435456,
            dataUrl: dataURL,
            asmCodeUrl: "cars-simulator-v2.asm.code.unityweb",
            asmMemoryUrl: "cars-simulator-v2.asm.memory.unityweb",
            asmFrameworkUrl: "cars-simulator-v2.asm.framework.unityweb",
            splashScreenStyle: "Dark",
            backgroundColor: "#222C36"
        };

        // Log the JSON object to the console
        console.log(jsonContent);
        
        // Optionally, if you want to see the data URL
        console.log("Merged Data URL:", dataURL);

    } catch (error) {
        console.error('Error merging files:', error);
        alert('Failed to merge files. Check console for details.');
    }
}
