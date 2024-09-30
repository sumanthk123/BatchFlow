'use client';

import './pitch.css';
import Image from 'next/image';
import eval_wireframe from '../public/batchflow-eval-wireframe.png';
import { useState } from 'react';

export default function EvalPictureContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (

    <div className="picture-container">
        <Image 
          src={eval_wireframe}
          alt="BatchFlow Evaluation Wireframe"
          width={500}
          height={300}
          className="rounded-lg shadow-md cursor-pointer"
          onClick={openModal}
        />
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg overflow-auto">
              <Image 
                src={eval_wireframe}
                alt="BatchFlow Evaluation Wireframe"
                width={2400}
                height={1440}
                className="rounded-lg shadow-md cursor-pointer"
                onClick={closeModal}
              />
            </div>
          </div>
        )}
        </div>
  );
}
