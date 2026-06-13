# Jada Han 作品集 - Vercel 部署准备脚本
# 以管理员身份运行或执行: Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Jada Han 作品集 - 部署准备工具" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 检查 Node.js
Write-Host "[1/6] 检查 Node.js..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✓ Node.js 版本: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ 错误: 未找到 Node.js，请先安装 Node.js" -ForegroundColor Red
    Write-Host "下载地址: https://nodejs.org/" -ForegroundColor Gray
    exit 1
}

# 检查 npm
Write-Host "[2/6] 检查 npm..." -ForegroundColor Yellow
try {
    $npmVersion = npm --version
    Write-Host "✓ npm 版本: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ 错误: 未找到 npm" -ForegroundColor Red
    exit 1
}

# 安装依赖
Write-Host "[3/6] 安装项目依赖..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ 依赖安装成功" -ForegroundColor Green
} else {
    Write-Host "✗ 依赖安装失败" -ForegroundColor Red
    exit 1
}

# 测试构建
Write-Host "[4/6] 测试生产构建..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ 构建测试成功" -ForegroundColor Green
} else {
    Write-Host "✗ 构建测试失败" -ForegroundColor Red
    exit 1
}

# 检查 Git
Write-Host "[5/6] 检查 Git..." -ForegroundColor Yellow
try {
    $gitVersion = git --version
    Write-Host "✓ Git: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ 警告: 未找到 Git，请安装 Git 以进行部署" -ForegroundColor Yellow
    Write-Host "下载地址: https://git-scm.com/" -ForegroundColor Gray
}

Write-Host "[6/6] 准备完成！" -ForegroundColor Yellow
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  下一步操作:" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. 初始化 Git 仓库:" -ForegroundColor White
Write-Host "   git init" -ForegroundColor Gray
Write-Host "   git add ." -ForegroundColor Gray
Write-Host "   git commit -m 'Initial commit'" -ForegroundColor Gray
Write-Host ""
Write-Host "2. 创建 GitHub 仓库并推送" -ForegroundColor White
Write-Host ""
Write-Host "3. 访问 https://vercel.com/new 导入仓库" -ForegroundColor White
Write-Host ""
Write-Host "详细说明请查看 DEPLOYMENT.md" -ForegroundColor Gray
Write-Host ""
