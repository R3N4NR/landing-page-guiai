import Modal from "./ModalBase";
import { featuredCreator } from "../../mock/dataMock";

export default function CreatorVideoModal({ onClose }: { onClose: () => void }) {
    return (
        <Modal onClose={onClose}>
            <div className="w-[360px] h-[640px] bg-black rounded-2xl overflow-hidden mx-auto flex items-center justify-center">
                <iframe src={featuredCreator.videoUrl} className="w-full h-full" allowFullScreen></iframe>
            </div>
        </Modal>
    );
}
