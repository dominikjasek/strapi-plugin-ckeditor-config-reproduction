// This file should be used to configure the CKEditor 5 editor. but it's not working
const CKEConfig = () => ({
    dontMergePresets: true,
    presets: {
        default: {
            field: {
                key: "myCustomPreset",
                value: "myCustomPreset",
                metadatas: {
                    intlLabel: {
                        id: "ckeditor5.preset.myCustomPreset.label",
                        defaultMessage: "My custom preset",
                    },
                },
            },
            editorConfig: {
                plugins: [
                    SH_CKE.Autoformat,
                    SH_CKE.Bold,
                    SH_CKE.Italic,
                    SH_CKE.Essentials,
                    SH_CKE.Heading,
                    SH_CKE.Image,
                    SH_CKE.ImageCaption,
                    SH_CKE.ImageStyle,
                    SH_CKE.ImageToolbar,
                    SH_CKE.ImageUpload,
                    SH_CKE.Indent,
                    SH_CKE.Link,
                    SH_CKE.List,
                    SH_CKE.Paragraph,
                    SH_CKE.PasteFromOffice,
                    SH_CKE.Table,
                    SH_CKE.TableToolbar,
                    SH_CKE.TableColumnResize,
                    SH_CKE.TableCaption,
                    SH_CKE.StrapiMediaLib,
                    SH_CKE.StrapiUploadAdapter,
                ],
                toolbar: [
                    'heading',
                    '|',
                    'bold', 'italic', 'link',
                    '|',
                    'strapiMediaLib', 'insertTable',
                    '|',
                    'undo', 'redo'
                ],
                heading: {
                    options: [
                        {model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph'},
                        {model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1'},
                        {model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2'},
                        {model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3'},
                        {model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4'},
                    ]
                },
                image: {
                    toolbar: [
                        'imageStyle:inline',
                        'imageStyle:block',
                        'imageStyle:side',
                        '|',
                        'toggleImageCaption',
                        'imageTextAlternative'
                    ]
                },
                table: {
                    contentToolbar: [
                        'tableColumn',
                        'tableRow',
                        'mergeTableCells',
                        '|',
                        'toggleTableCaption'
                    ]
                }
            }
        }
    }
})
