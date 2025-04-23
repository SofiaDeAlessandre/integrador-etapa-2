import './DragDrop.scss'


const DragDrop = ({setFoto, srcImagenBack, setSrcImagenBack}) => {

    const arrayEventosDragDrop = ['dragenter', 'dragleave', 'dragover', 'drop']
    arrayEventosDragDrop.forEach(eventName => {
        document.body.addEventListener(eventName, e => e.preventDefault())
    })

    const handleDrop = (e) => {
        console.log(e)
        const files = e.dataTransfer.files
        handleFiles(files)
    }
    const handleChange = () => {
        
    }
   const handleFiles = (files) => {
    const file = files[0]
    uploadFile(file)
    previewFile(file)
   }

   const uploadFile = (file) => {
console.log('Llegó a upload', file)
   }


   const previewFile = (file) => {
    console.log('Llegó a preview', file)
    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.addEventListener('loadend', () => {
        setSrcImagenBack(reader.result)
    })
   }

  return (
    <div className='drop-area' onDrop={handleDrop}>
        <p>
            Subir imagen al servidor con <b>File Dialog</b> o con
            <b> drag and drop</b> dentro del area punteada.
        </p>
        <input type="file" id="lbl-foto" accept="image/*" onChange={handleChange} />
        <label className="drop-area-button" htmlFor="lbl-foto">
            File Dialog
        </label>
        <div className='drop-area-image'>
            <img src={srcImagenBack} alt="" />
        </div>
    </div>
  )
}

export default DragDrop