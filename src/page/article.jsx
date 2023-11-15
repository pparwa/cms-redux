import React from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function Article()
{
    return(
        <>
        <div className="w-100">
         <CKEditor
                    editor={ ClassicEditor }
                    />
                    </div>
        </>
    )
}