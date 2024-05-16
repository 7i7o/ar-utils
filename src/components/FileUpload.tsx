import { useState } from 'react';

const FileUpload = () => {
    const [uploading, setUploading] = useState(false);
    const handleUpload = async () => {
        setUploading(true);
        setUploading(false);
    };
    return (
        <div className="flex flex-col space-y-4 items-center">
            <input type="file" disabled={uploading} />
            <button
                className="rounded-md bg-blue-200 hover:bg-blue-300 px-4 py-2"
                onClick={handleUpload}
            >
                Upload
            </button>
        </div>
    );
};

export default FileUpload;
