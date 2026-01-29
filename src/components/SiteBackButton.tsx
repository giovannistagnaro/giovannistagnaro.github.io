import { ChevronLeft } from "lucide-react";

const SiteBackButton = () => {
  return (
    <button
      type="button"
      className="site-button"
      onClick={() => window.history.back()}
    >
      <span className="inline-flex items-center gap-2">
        <ChevronLeft size={16} />
        Back
      </span>
    </button>
  );
};
export default SiteBackButton;
