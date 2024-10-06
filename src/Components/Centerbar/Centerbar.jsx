import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Centerbar.css';
import Input3 from '../Input/Input3';

export default function Centerbar({ select }) {
    const [file, setFile] = useState(null);
    const [fileList, setFileList] = useState([]);
    const groupId = select.id;

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/v1.0.0/file_sharing_group/${groupId}`);
                setFileList(response.data.file_sharing_groups);
            } catch (error) {
                console.error('Erreur lors de la récupération des fichiers :', error);
            }
        };

        fetchFiles();
    }, [groupId]);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0]; // Récupérer le premier fichier sélectionné
        setFile(selectedFile);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (file) {
            // Créer un objet FormData
            const formData = new FormData();
            formData.append('file', file); // Ajouter le fichier dans FormData

            try {
                const response = await axios.post(`http://127.0.0.1:8000/api/v1.0.0/file-sharing/${groupId}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data', // Indiquer le type de contenu pour un envoi de fichier
                    },
                });
                console.log('Fichier envoyé avec succès :', response.data);
            } catch (error) {
                console.error('Erreur lors de l\'envoi du fichier :', error);
            }
        } else {
            console.log('Aucun fichier sélectionné');
        }
    };

    return (
        <div className='container-file222'>
            <div className='group-flex'>
                <img src={'/Images/profil.png'} alt="Profil" />
                <div>
                    <div>{select.name}</div>
                    <div>{select.description}</div>
                </div>
            </div>


            <form className='file-small' onSubmit={handleSubmit}>
                <Input3
                    label={<img src='/Images/plus-circlé.png' width={30} alt="Télécharger" />}
                    placeHolder={''}
                    reference={'file'}
                    type={'file'}
                    onChange={handleFileChange}
                />
                <button type="submit">
                    <img src='/Images/avion.png' alt="Envoyer" width={25} />
                </button>
            </form>

            <div>
                <h3>Fichiers du groupe :</h3>
                <ul>
                    {fileList.map((file, index) => (
                        <li key={index}>
                            <div>Nom du fichier : <a href={file.path} target='_blank'>{file.path}</a> </div> {/* Extrait le nom du fichier du chemin */}
                            <div>Date d'ajout : {new Date(file.created_at).toLocaleDateString()}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
