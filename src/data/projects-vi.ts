import { projects, type Project } from './projects';

const vi: Record<string, Partial<Project>> = {
  'neon-drifter': {
    shortDescription:'Cảm giác lái arcade trên đường phố đêm mưa.', description:'Ý tưởng game đua xe di động tập trung vào điều khiển dễ hiểu, cảm giác lái và vòng tiến trình ngắn.', platform:['Di động'], genre:'Đua xe 3D', status:'Ý tưởng demo',
    services:['Lập trình gameplay','Tối ưu'], challenge:'Tạo cảm giác lái arcade nhạy và rõ ràng trên màn hình cảm ứng.', approach:'Làm nguyên mẫu vòng lái trước, sau đó tinh chỉnh đồng thời điều khiển, camera và phản hồi.', built:'Vòng đua có thể chơi, điều khiển cảm ứng, hệ thống camera và sự kiện đường đua dạng mô-đun.',
    features:['Điều khiển cảm ứng','Camera bám động','Sự kiện đường đua mô-đun','Thông số xe tái sử dụng'], technicalWork:['Kiến trúc điều khiển xe','Lớp trừu tượng đầu vào','Object pooling','Tối ưu cho thiết bị di động'], outcome:'Một ý tưởng demo dùng để minh họa quy trình làm việc, không phải sản phẩm đã phát hành cho khách hàng.'
  },
  'tiny-world': {
    shortDescription:'Cuộc phiêu lưu platform nhỏ gọn trên mây.', description:'Ý tưởng nguyên mẫu 3D tươi sáng xoay quanh di chuyển, khám phá và các đảo nổi dạng mô-đun.', platform:['PC'], genre:'Platform 3D', status:'Ý tưởng nguyên mẫu', services:['Làm nguyên mẫu game','Triển khai màn chơi'],
    challenge:'Tạo cảm giác di chuyển vui nhộn nhưng vẫn giúp người chơi dễ đọc không gian nhỏ.', approach:'Dựng chuyển động và camera trước khi bổ sung hình ảnh và tương tác.', built:'Bộ điều khiển nhân vật, vòng thu thập, trigger môi trường và bộ đảo mô-đun.', features:['Di chuyển nhạy','Vòng thu thập','Môi trường mô-đun','Hỗ trợ camera'], technicalWork:['Máy trạng thái nhân vật','Va chạm camera','Hệ thống tương tác tái sử dụng'], outcome:'Bản minh họa nhỏ gọn cho quy trình từ nguyên mẫu đến hoàn thiện.'
  },
  'lost-signals': {
    shortDescription:'Màn chơi lén lút được dẫn dắt bởi ánh sáng và âm thanh.', description:'Ý tưởng gameplay có không khí căng thẳng với nhận thức AI rõ ràng, nhiều tuyến lén lút và kể chuyện qua môi trường.', platform:['PC'], genre:'Lén lút 3D', status:'Ý tưởng demo', services:['Lập trình gameplay','Hệ thống game'],
    challenge:'Truyền đạt mức độ cảnh giác của kẻ địch mà không phá vỡ bầu không khí.', approach:'Xây dựng trạng thái nhận thức dựa trên quy tắc nhất quán và tín hiệu trong thế giới game.', built:'Hành vi tuần tra, công cụ đánh lạc hướng, phản hồi cảnh giác và checkpoint.', features:['Trạng thái nhận thức AI','Hệ thống đánh lạc hướng','Phản hồi lén lút','Luồng checkpoint'], technicalWork:['AI máy trạng thái','Tín hiệu âm thanh theo sự kiện','Hiển thị debug'], outcome:'Ý tưởng demo minh họa khả năng triển khai gameplay có tính hệ thống.'
  },
  'orbit-defense': {
    shortDescription:'Vòng chiến thuật nhỏ gọn quanh một tiền đồn trên đảo.', description:'Ý tưởng tower defense sẵn sàng cho WebGL, tập trung vào lựa chọn rõ ràng và dữ liệu màn chơi tái sử dụng.', platform:['WebGL'], genre:'Chiến thuật 2D', status:'Ý tưởng nguyên mẫu', services:['Làm nguyên mẫu game','WebGL'],
    challenge:'Giữ các lựa chọn chiến thuật rõ ràng trên một khu vực chơi nhỏ.', approach:'Dùng đợt tấn công theo dữ liệu cùng phản hồi rõ ràng về tầm đánh, đường đi và nâng cấp.', built:'Hệ thống đặt trụ, chọn mục tiêu, đợt tấn công và nâng cấp.', features:['Đợt tấn công theo dữ liệu','Nâng cấp trụ','Nhắm mục tiêu rõ ràng','Phiên chơi ngắn'], technicalWork:['Dữ liệu ScriptableObject','Object pooling','Tối ưu bản WebGL'], outcome:'Nền tảng nguyên mẫu linh hoạt cho việc thử nghiệm trên trình duyệt.'
  },
  'pixel-chef': {
    shortDescription:'Thử thách căn thời gian vui nhộn cho phiên chơi ngắn.', description:'Ý tưởng game nấu ăn 2D thử nghiệm quản lý hàng chờ, thời điểm thao tác và nội dung công thức tái sử dụng.', platform:['Di động'], genre:'Casual 2D', status:'Ý tưởng demo', services:['Triển khai UI','Lập trình gameplay'],
    challenge:'Giúp người chơi hiểu hàng chờ nhanh mà không làm giao diện rối.', approach:'Làm nguyên mẫu phân cấp thông tin và phản hồi thời gian cùng cơ chế cốt lõi.', built:'Hàng chờ món, dữ liệu công thức, tính điểm và trạng thái HUD thích ứng.', features:['Hệ thống công thức','Hàng chờ món','Phản hồi thời gian','UI thích ứng'], technicalWork:['Nội dung theo dữ liệu','Quản lý trạng thái UI','Điều khiển cảm ứng'], outcome:'Ý tưởng demo cho giao diện di động rõ ràng và gameplay phiên ngắn.'
  },
  'shadow-protocol': {
    shortDescription:'Nguyên mẫu hành động căng thẳng trong tàn tích bỏ hoang.', description:'Ý tưởng chiến đấu tập trung vào áp lực từ kẻ địch, phản hồi kỹ năng và nhịp độ giao tranh.', platform:['PC'], genre:'Hành động 3D', status:'Ý tưởng nguyên mẫu', services:['Lập trình gameplay','Tối ưu'],
    challenge:'Tạo áp lực bằng một nhóm hành vi kẻ địch nhỏ nhưng tái sử dụng tốt.', approach:'Xây dựng trạng thái chiến đấu mô-đun, sau đó tinh chỉnh độ rõ ràng và nhịp độ.', built:'Kỹ năng người chơi, trạng thái kẻ địch, phản hồi đòn đánh và chuỗi giao tranh.', features:['Kỹ năng mô-đun','Trạng thái hành vi kẻ địch','Phản hồi va chạm','Chuỗi giao tranh'], technicalWork:['Kiến trúc chiến đấu','Sự kiện animation','Kiểm tra profiler'], outcome:'Ý tưởng nguyên mẫu minh họa các hệ thống hành động dạng mô-đun.'
  }
};

export const projectsVi: Project[] = projects.map((project) => ({ ...project, ...vi[project.slug] }));
export const featuredProjectsVi = projectsVi.filter((project) => project.featured);
