import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Centerbar.css';
import Input3 from '../Input/Input3';
import Button5 from '../Button/Button5';

export default function Centerbar({ select }) {
    const [file, setFile] = useState(null);
    const [fileList, setFileList] = useState([]);
    const [members, setMembers] = useState([]);
    const groupId = select.id;

    const dialog2 = useRef();

    const showMembers = (id) => {
        axios.get(`http://127.0.0.1:8000/api/v1.0.0/members-group/${id}`,
            {
                headers: {
                    'Authorization': `Bearer ` + localStorage.getItem("token")
                }
            }
        )
            .then((res) => res.data
            )
            .then((data) => {
                console.log("Member : ")
                console.log(data.data[0])
                setMembers(data.data[0])
            })
            .catch((err) => console.log(err))
    }

    const openHandler = async () => {
        dialog2.current.showModal();
        await showMembers(groupId)
    };

    const closeHandler = () => {
        dialog2.current.close();
    };

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const token = localStorage.getItem('token');

                // Vérifier si le token est disponible
                if (!token) {
                    console.error('Token non disponible');
                    return;
                }

                const response = await axios.get(`http://127.0.0.1:8000/api/v1.0.0/file_sharing_group/${groupId}`, {
                    headers: {
                        'Authorization': `Bearer ` + localStorage.getItem('token')
                    }
                });

                // console.log(response.data)
                console.log(response.data.file_sharing_groups)
                setFileList(response.data.file_sharing_groups);
            } catch (error) {
                console.error('Erreur lors de la récupération des fichiers :', error);
            }
        };

        fetchFiles();
    }, [groupId]);


    console.log(fileList);
    console.log(groupId);


    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0]; // Récupérer le premier fichier sélectionné
        setFile(selectedFile);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (file) {
            // Créer un objet FormData
            const userId = localStorage.getItem('user_id');
            console.log(userId)
            const formData = new FormData();
            formData.append('file', file); // Ajouter le fichier dans FormData

            try {
                const response = await axios.post(`http://127.0.0.1:8000/api/v1.0.0/file-sharing/${groupId}/${userId}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data', // Indiquer le type de contenu pour un envoi de fichier
                        'Authorization': `Bearer ` + localStorage.getItem('token')
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
                <div className='group-profil'>
                    <img src={'/Images/profil.png'} alt="Profil" />
                    <div>
                        <div>{select.name}</div>
                        <div>{select.description}</div>
                    </div>
                </div>

                <div className='right'><Button5 type={'submit'} text={'Membres du groupe'} onClick={openHandler} /></div>

                <dialog ref={dialog2} className="dialogue2">

                    <button onClick={closeHandler} type="button" className="open">
                        Fermer
                    </button><br />

                    <h1>
                        liste des membres du groupe !
                    </h1><br />

                    <div>
                        {members.length===0 ? <p>Aucun membre !</p> : <div>
                            {members.map((member, index) => (
                                <div key={index}>
                                    <p>
                                        {member.name}
                                    </p>
                                    <p>
                                    {member.email}
                                    </p>
                                </div>
                            ))}</div>}
                    </div>
                </dialog>
            </div><br /><br /><br /><br /><br />

            <div>
                <ul className='file-space'>
                    {fileList.map((file, index) => (
                        <li key={index}>
                            <div className='group-flex2'>
                                <img src={'/Images/profil.png'} alt="Profil" />
                                <div>{file.user[0].email}</div>
                            </div>
                            <div className='file'>
                                <div>Nom du fichier : <a href={file.file[0].path} target='_blank'>{file.file[0].path}</a> </div> {/* Extrait le nom du fichier du chemin */}
                                <div>Date d'ajout : {new Date(file.file[0].created_at).toLocaleDateString()}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div><br /><br />

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
        </div>
    );
}
